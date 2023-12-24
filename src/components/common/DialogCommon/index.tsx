import { Dialog, DialogActions, Typography } from "@mui/material";
import {useTranslations} from "next-intl";
import ButtonCommon from "~/components/common/ButtonCommon";
const DialogCommon = ({...props}) => {
  const t = useTranslations();
  return (
    <Dialog
      open={props.isModalOpen}
      maxWidth="xs"
      className="rounded-3xl"
      fullWidth
    >
      <div className="flex items-center justify-center pb-5">
        {props.icon}
      </div>
      <Typography>
        <div className="text-[22px] pni-danger-text text-center font-semibold pni-text-title">
          {props.title}
        </div>
      </Typography>
      <Typography className="py-6 px-4">
        <div className="text-base pni-danger-text text-center pni-text-base new-line">
          {props.subTitle}
        </div>
      </Typography>

      <DialogActions>
        <ButtonCommon
          color={props.color || "error"}
          size="medium"
          onClick={() => props.setIsModalOpen(false)}
          className="w-full rounded-3xl"
          variant="outlined"
        >
          {t("common.button.cancel")}
        </ButtonCommon>
        <ButtonCommon
          size="medium"
          type="button"
          color={props.color || "error"}
          className="w-full rounded-3xl text-white"
          onClick={props.handleSubmit}
          autoFocus
        >
          {t("common.button.continue")}
        </ButtonCommon>
      </DialogActions>
    </Dialog>
  )
}

export  default DialogCommon