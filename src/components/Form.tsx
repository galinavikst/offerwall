import { useState } from "react";
import { MONTHS, PAYMENT, REQUIRED, initValues } from "../constants";
import arrowDownSvg from "../assets/icons/arrow-d.svg";
import { useForm, Controller } from "react-hook-form";
import { useMask } from "@react-input/mask";

const Form = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 10 }, (_, index) => currentYear + index);
  const cardNumberRef = useMask({
    mask: "____ ____ ____ ____",
    replacement: { _: /\d/ },
  });
  const cardCodeRef = useMask({
    mask: "___",
    replacement: { _: /\d/ },
  });

  const [paymentMethod, setPaymentMethod] = useState<string>("master");

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: initValues,
  });

  const submitForm = (data: { [key: string]: string }) => {
    console.log("data to send: => ", { ...data, paymentMethod });
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="bg-bg-dark text-white grow min-w-[320px] p-4 lg:p-14"
    >
      <h3
        title="company shoping cart details"
        className="lg:text-2xl font-semibold lg:mb-6 pb-5 border-b border-white"
      >
        Card details
      </h3>

      <label>
        Select payment method
        <div className="flex max-w-[500px] mx-auto justify-between my-5">
          {PAYMENT.map((el) => (
            <button
              type="button"
              key={el.id}
              onClick={() => setPaymentMethod(el.id)}
              className={`${
                paymentMethod === el.id ? "border-white" : "border-bg-dark"
              } border-b pb-2`}
            >
              <img
                src={el.imgSrc}
                width={64}
                height={35}
                alt="payment method icon"
                title="payment method logo"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </label>

      <div className="flex flex-col gap-3">
        <Controller
          control={control}
          name="clientName"
          rules={{
            required: true,
            maxLength: 50,
            minLength: 4,
            pattern: {
              value: /^[a-zA-Z\s'-]+$/,
              message: "Please enter a valid name",
            },
          }}
          render={({ field }) => (
            <label className="flex flex-col gap-3">
              Name on card
              <div>
                <input
                  {...field}
                  className="input"
                  placeholder="Meet Patel"
                  required
                />
                {errors?.clientName && (
                  <p className="text-xs text-red-500 px-3">
                    {errors?.clientName.message || REQUIRED}
                  </p>
                )}
              </div>
            </label>
          )}
        />

        <label className="flex flex-col gap-3">
          Card number
          <div>
            <Controller
              control={control}
              name="cardNumber"
              rules={{
                required: true,
                maxLength: 19, // Account with spaces between groups of digits
                minLength: 19,
              }}
              render={({ field }) => (
                <input
                  {...field}
                  ref={cardNumberRef}
                  className="input"
                  placeholder="0000 0000 0000 0000"
                  required
                />
              )}
            />
            {errors?.cardNumber && (
              <p className="text-xs text-red-500 px-3">{REQUIRED}</p>
            )}
          </div>
        </label>

        <label className="flex flex-col gap-3">
          Card expiration
          <div className="flex gap-3">
            <div className="grow">
              <div className="relative">
                <Controller
                  control={control}
                  name="month"
                  rules={{
                    required: REQUIRED,
                    validate: (value) => value !== "0" || "Month is required",
                  }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="input appearance-none "
                      required
                    >
                      {MONTHS.map((month) => (
                        <option
                          key={month.label}
                          value={month.value}
                          className="text-black"
                        >
                          {month.label}
                        </option>
                      ))}
                    </select>
                  )}
                />
                <img
                  src={arrowDownSvg}
                  alt="arrow down"
                  className="w-auto h-auto absolute right-4 top-1/2 -translate-y-1/2"
                />
              </div>
              {errors?.month && (
                <p className="text-xs text-red-500 px-3">
                  {errors?.month.message}
                </p>
              )}
            </div>

            <div className="grow">
              <div className="relative">
                <Controller
                  control={control}
                  name="year"
                  rules={{
                    required: REQUIRED,
                    validate: (value) => value !== "0" || "Year is required",
                  }}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="input appearance-none"
                      required
                    >
                      <option value="0" className="text-black">
                        Year
                      </option>
                      {years.map((year) => (
                        <option key={year} value={year} className="text-black">
                          {year}
                        </option>
                      ))}
                    </select>
                  )}
                />

                <img
                  src={arrowDownSvg}
                  alt="arrow down"
                  className="w-auto h-auto absolute right-4 top-1/2 -translate-y-1/2"
                />
              </div>
              {errors?.year && (
                <p className="text-xs text-red-500 px-3">
                  {errors?.year.message}
                </p>
              )}
            </div>
          </div>
        </label>

        <label className="flex flex-col gap-3">
          Card Security Code
          <div>
            <Controller
              control={control}
              name="code"
              rules={{ required: true, maxLength: 3, minLength: 3 }}
              render={({ field }) => (
                <input
                  {...field}
                  ref={cardCodeRef}
                  className="input"
                  placeholder="Code"
                  required
                />
              )}
            />
            {errors?.code && (
              <p className="text-xs text-red-500 px-3">{REQUIRED}</p>
            )}
          </div>
        </label>
      </div>

      <button type="submit" className="btn-accent-contained w-full my-6 p-5">
        Continue
      </button>
    </form>
  );
};

export default Form;
