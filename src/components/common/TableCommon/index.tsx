import PaginationCommon from "~/components/common/PaginationCommon";
import { useTranslations } from "next-intl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "~/components/common/TableCommon/style.scss";
import Link from "next/link";
import ButtonCommon from "~/components/common/ButtonCommon";
import DoDisturbAltIcon from "@mui/icons-material/DoDisturbAlt";

const TableCommon = ({ children, ...props }: any) => {
  const t = useTranslations();
  const button = useTranslations("common.button");
  const {
    fetchData,
    paginator,
    handleChangePage,
    columns,
    pagination,
    data,
    title,
  } = props;
  return (
    <div className={"mt-6"}>
      {fetchData && Array.isArray(fetchData) && fetchData.length ? (
        <div className="box-form">
          <TableContainer component={Paper} className={"table"}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className={"bg-secondary-02 __head"}>
                  {columns.map((column: any, i: number) => (
                    <TableCell
                      key={column.dataIndex + "_" + i}
                      className={column.className ?? ""}
                    >
                      {column.title}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {fetchData.map((row, index) => (
                  <TableRow
                    key={"row_" + index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {columns.map((column: any, i: number) => (
                      <TableCell
                        key={column.dataIndex + "_" + index + "_" + i}
                        className={
                          (column.wordBreak ? "word-break-all " : "") +
                          column.className
                        }
                      >
                        {column.render(row)}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <PaginationCommon
            paginator={paginator}
            handleChangePage={handleChangePage}
            data={pagination}
            total={data.total}
            count={data.count}
            totalPage={Math.ceil(data.total / paginator.limit)}
            page={paginator.page}
          />
        </div>
      ) : (
        <div className="box-form">
          <div>{title}</div>
          <div className="text-center flex flex-col justify-between pt-4">
            <div>
              <DoDisturbAltIcon className="text-[88px] fill-neutral-03" />
              <div className="text-base text-center text-neutral-09 mt-3 font-normal">
                {t("common.messages.msg004")}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableCommon;
