import { Link } from "@mui/material";
import { Breadcrumbs, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const BreadcrumbsCommon = ({ ...props }) => {
  const t = useTranslations();
  const common: any = {};
  let breadcrumbs: any = [];
  if (props.data) {
    props.data.forEach((datum: any, index: number) => {
      if (index == props.data.length - 1) {
        breadcrumbs = breadcrumbs.concat(
          <Typography
            key="3"
            fontWeight={"medium"}
            className={"fs-14 text-primary-06"}
          >
            {common[datum].title}
          </Typography>
        );
      } else {
        breadcrumbs = breadcrumbs.concat(
          <Link
            underline="hover"
            key={index}
            href={common[datum].link}
            className={"font-medium text-neutral-06 fs-14"}
          >
            {common[datum].title}
          </Link>
        );
      }
    });
  }

  return (
    <div className={"flex"}>
      <Breadcrumbs aria-label="breadcrumb">{breadcrumbs}</Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsCommon;
