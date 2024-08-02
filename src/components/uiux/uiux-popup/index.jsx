/* eslint-disable react/prop-types */
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import "./style.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const UiUxPopUp = ({ popup, setPopup, setPopup2 }) => {
  return (
    <>
      {popup ? (
        <div className="popup">
          <header>
            <button onClick={() => setPopup(false)}>X</button>
          </header>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setPopup(false);
              setPopup2(true);
            }}
            className="popup-content"
          >
            <h1>
              <span>Randevu</span>
              <span>al</span>
            </h1>
            <input required placeholder="Ad Soyad" type="text" name="" id="" />
            <input
              required
              placeholder="+994 __  ___  __  __ "
              type="number"
              name=""
              id=""
            />
            <input required placeholder="E-mail" type="email" name="" id="" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{
                  "& input": {
                    padding: "2px",
                    paddingLeft: "16px",
                    height: "48px",
                    borderRadius: "12px",
                  },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
                label="Basic date picker"
                defaultValue={dayjs()}
              />
            </LocalizationProvider>
            <button type="submit">Göndər</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UiUxPopUp;
