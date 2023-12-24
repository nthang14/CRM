"use client";
import "./style.scss";
import {
  Avatar,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Popover,
  List,
  ListItemText,
  ListItemButton,
  ListItem,
} from "@mui/material";
import ButtonCommon from "~/components/common/ButtonCommon";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { logout } from "~/app/slices/authSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { readProfile } from "~/utils/storage";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import infoIcon from "~/assets/icons/info-icon.svg";
import Image from "next/image";
const LOGOUT = "";
export default function Header() {
  const t = useTranslations();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(!anchorEl ? event.currentTarget : null);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout({}));
    router.push("/auth/login");
  };
  const items = [
    {
      label: <div className="capitalize">{LOGOUT}</div>,
      key: "log out",
      icon: <LogoutOutlinedIcon />,
      trailingIcon: <ArrowRightOutlinedIcon />,
    },
  ];
  const handleClickMenuItem = ({ key }: any) => {
    if (key === LOGOUT) {
      setIsModalOpen(true);
    }
    setAnchorEl(null);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    handleLogout();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const profile = readProfile();
  return (
    <div className="flex items-center justify-between px-4 pt-4 pb-2">
      <div className="font-semibold text-[32px] leading-[42px] text-primary-06">
        CRM
      </div>
      <div className="flex items-center justify-around">
        <Avatar alt="Remy Sharp">
          <AccountCircleOutlinedIcon />
        </Avatar>
        <IconButton aria-describedby={id} onClick={handleClick}>
          {open ? <ExpandMoreOutlinedIcon /> : <ExpandLessOutlinedIcon />}
        </IconButton>
        <Popover
          id={id}
          open={open}
          onClose={() => setAnchorEl(null)}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 53,
            horizontal: "left",
          }}
        >
          <List className="bg-white !p-0">
            {items.map((item, index) => {
              return (
                <ListItem
                  key={index}
                  onClick={() => handleClickMenuItem(item)}
                  className="!px-0 !py-2"
                >
                  <ListItemButton className="flex gap-3 !py-0 !px-3 logout-btn">
                    {item.icon}
                    <ListItemText className="!my-2 w-[144px]">
                      <div className="capitalize">{item.label}</div>
                    </ListItemText>
                    {item.trailingIcon}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Popover>
      </div>
      <Dialog
        open={isModalOpen}
        onClose={handleCancel}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="text-center !p-0 mt-3 h-16"
        >
          <Image src={infoIcon} alt="info" width={64} height={64} />
        </DialogTitle>
        <DialogContent className="mt-3 pb-7">
          <DialogContentText id="alert-dialog-description">
            <div className="text-[22px] leading-[28px] font-medium pni-danger-text text-center">
              {t("login.logout")}
            </div>
            <div className="text-base pni-danger-text text-center pt-3 text-neutral-08">
              {t("common.messages.msg006")}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="p-0 pt-3">
          <ButtonCommon
            className="w-[216px] rounded-3xl leading-[24px]"
            size="medium"
            variant="outlined"
            onClick={handleCancel}
          >
            {t("common.button.cancel")}
          </ButtonCommon>
          <ButtonCommon
            className="w-[216px] rounded-3xl !ml-4 leading-[24px]"
            size="medium"
            variant="contained"
            onClick={handleOk}
            autoFocus
          >
            {t("common.button.continue")}
          </ButtonCommon>
        </DialogActions>
      </Dialog>
    </div>
  );
}
