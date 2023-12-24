import HeaderApp from "~/components/layout/header/Header";
import Navigation from "~/components/layout/navigation/Navigation";
import {Alert, Grid, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {setNotify} from "~/app/slices/commonSlice";
export default function AppLayout({ children }: any) {
  const dispatch = useDispatch();
  const isShowNotify = useSelector((state: any) => state.common.isShowNotify);
  const notifyContent = useSelector((state: any) => state.common.notifyContent);
  const typeAlert = useSelector((state: any) => state.common.typeAlert);

  return (
    <>
      <div className="h-screen">
        <HeaderApp />
        <Grid container className="min-h-custom">
          <Grid item xs={2} md={2}>
            <Navigation />
          </Grid>
          <Grid item xs={10} md={10} className="bg-primary-01 px-4 py-2">
            {children}
          </Grid>
        </Grid>
      </div>
      <Snackbar
        open={isShowNotify}
        autoHideDuration={3000}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        onClose={(e) => dispatch(setNotify({isShowNotify: false, notifyContent: ""}))}
      >
        <Alert severity={typeAlert} sx={{ width: "100%" }}>
          {notifyContent}
        </Alert>
      </Snackbar>
    </>
  );
}
