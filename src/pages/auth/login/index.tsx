import { useAuthLoginMutation } from "~/app/services/authService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IconButton, InputAdornment, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { setNotify } from "~/app/slices/commonSlice";
import ButtonCommon from "~/components/common/ButtonCommon";
import { saveAccessToken, saveRefreshToken } from "~/utils/storage";
import { useTranslations } from "next-intl";
import "./style.scss";
import InputHasValidate from "~/components/common/InputCommon/InputHasValidate";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
export default function Login() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm({ mode: "onBlur" });

  const t = useTranslations();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [login] = useAuthLoginMutation();
  const handleLogin = async (value: any) => {
    if (isLoading) return;
    setIsLoading(true);
    const result: any = await login(value);
    if (!!result && result?.data?.success) {
      saveAccessToken(result?.data?.data?.access_token || "");
      saveRefreshToken(result?.data?.data?.refresh_token || "");
      dispatch(
        setNotify({
          isShowNotify: true,
          notifyContent: "login success",
        })
      );
      return;
    }
    setIsLoading(false);
  };

  return (
    <div id="login-page">
      <div className="login-page">
        <div className="logo"></div>
        <form className="form-login">
          <div className="title">
            <Typography variant="h3" className="pni-text-title">
              {t("login.title")}
            </Typography>
            <span className="pni-text-base">{t("login.sub_title")}</span>
          </div>
          <div className="text-field">
            <InputHasValidate
              control={control}
              name="username"
              rules={{
                required: t("common.messages.msg001input", {
                  field: t("login.payload.username"),
                }),
              }}
              label={t("login.payload.username")}
              error={errors.username}
              inputProps={{
                style: { color: errors.username && "#B33434" },
              }}
              attribute={{
                maxLength: 256,
                autoComplete: "new-password",
                form: {
                  autoComplete: "off",
                },
              }}
              type="text"
            />
            <InputHasValidate
              control={control}
              name="password"
              rules={{
                required: t("common.messages.msg001input", {
                  field: t("login.payload.password"),
                }),
              }}
              label={t("login.payload.password")}
              error={errors.password}
              inputProps={{
                style: { color: errors.password && "#B33434" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      className="bg-white hover:bg-white"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      style={{ color: errors.password && "#B33434" }}
                    >
                      {showPassword ? (
                        <VisibilityOffOutlinedIcon
                          className={
                            errors.password ? "fill-error" : "fill-neutral-09"
                          }
                        />
                      ) : (
                        <VisibilityOutlinedIcon
                          className={
                            errors.password ? "fill-error" : "fill-neutral-09"
                          }
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              attribute={{ maxLength: 256 }}
              type={showPassword ? "text" : "password"}
            />
          </div>
          <div className="form-button">
            <ButtonCommon
              color="primary"
              size="large"
              variant="contained"
              className="rounded-3xl w-full"
              onClick={handleSubmit(handleLogin)}
            >
              {t("common.button.login")}
            </ButtonCommon>
          </div>
        </form>
      </div>
    </div>
  );
}
