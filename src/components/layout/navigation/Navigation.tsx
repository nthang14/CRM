import {
  ListItemText,
  List,
  ListSubheader,
  ListItemButton,
  Collapse,
  Divider,
  ListItem,
} from "@mui/material";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { useTranslations } from "next-intl";
import { createElement, useState } from "react";
import { useRouter } from "next/router";
export default function Navigation() {
  const t = useTranslations();
  const router = useRouter();
  const menus = [
    {
      key: t("nav.dataAnalysis"),
      label: t("nav.dataAnalysis"),
      icon: createElement(AnalyticsOutlinedIcon),
      children: [
        {
          key: t("nav.dashboard"),
          label: t("nav.dashboard"),
          link: "/",
        },
      ],
    },
  ];
  const [actives, setActives] = useState<string[]>(() => {
    return menus.map((menu) => menu.key);
  });
  const handleOpenCollapse = (key: string) => {
    if (actives.includes(key)) {
      setActives((state) => {
        const newState = state.filter((s) => s !== key);
        return newState;
      });
    } else {
      setActives((state) => {
        const newState = state.concat(key);
        return newState;
      });
    }
  };
  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            className="text-base font-medium text-secondary-09 py-4"
          >
            {t("common.navigation")}
          </ListSubheader>
        }
      >
        {menus.map((menu: any, indexMenu: number) => {
          return (
            <div key={menu.key} className="pt-2">
              <ListItemButton onClick={() => handleOpenCollapse(menu.key)}>
                {menu.icon || ""}
                <ListItemText className="pl-3">
                  <div className="text-sm font-medium text-[14px] text-neutral">
                    {menu.label}
                  </div>
                </ListItemText>
                {actives.includes(menu.key) ? (
                  <ExpandLessOutlinedIcon />
                ) : (
                  <ExpandMoreOutlinedIcon />
                )}
              </ListItemButton>
              {menu.children && menu.children.length > 0 && (
                <div>
                  <Collapse
                    timeout="auto"
                    in={actives.includes(menu.key)}
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {menu.children.map((submenu: any, index: number) => {
                        <ListItem
                          key={`${submenu.key}-${index}`}
                          sx={{ pl: 4 }}
                          className={`mx-2 my-1 ${
                            submenu?.link && router.pathname === submenu.link
                              ? "bg-primary-01 rounded-3xl"
                              : ""
                          } `}
                        >
                          <ListItemText>
                            <div
                              className={`pl-5 text-base font-semibold text-neutral-07 ${
                                router.pathname === submenu.link
                                  ? "text-primary"
                                  : ""
                              }`}
                            >
                              {submenu.label}
                            </div>
                          </ListItemText>
                        </ListItem>;
                      })}
                    </List>
                  </Collapse>
                  {indexMenu < menus.length - 1 && <Divider className="mx-6" />}
                </div>
              )}
            </div>
          );
        })}
      </List>
    </>
  );
}
