import { Button } from "@mui/material";
import { useIntl } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import { updateLanguage } from "../redux/actions/languageActions";
import { Container } from "@mui/material";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function Home() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const intl = useIntl();
  const discordId = "yirmi2#9444";

  {/* Mui popover */}
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  {/* Mui popover */}


  return (
    <>
      <h1 className="text-center mt-10">
        <Button
          style={{
            marginRight: "30px",
            height: "50px",
            width: "150px",
            fontWeight: "bolder",
            fontSize: "20px",
          }}
          onClick={() => dispatch(updateLanguage("tr"))}
          variant={"contained"}
        >
          TR
        </Button>
        <Button
          style={{
            height: "50px",
            width: "150px",
            fontWeight: "bolder",
            fontSize: "20px",
          }}
          onClick={() => dispatch(updateLanguage("en"))}
          variant={"contained"}
        >
          EN
        </Button>
        <div className="mt-12">
          <Container>
            <h1 className="font-bold text-4xl">{intl.messages.hello}</h1>
            <p className="text-3xl font-thin mt-5">
              {intl.messages.helloDescription}
            </p>

            <hr className="mt-10" />
          </Container>
        </div>
        <div className="contact flex justify-center mt-5">
          <div className="icon text-4xl w-20 h-20 bg-gray-200 p-4 rounded hover:bg-gray-300 transition-all cursor-pointer">
            <a
              href="https://www.github.com/MadeByForeV"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="icon mr-20 w-22 h-20 ml-20 text-4xl bg-gray-200 p-4 rounded hover:bg-gray-300 transition-all cursor-pointer" 
              onClick={handleClick}>
            <i
              className="fab fa-discord"
              aria-describedby={id}
            ></i>
          </div>
          <div className="icon text-5xl w-20 h-20 bg-gray-200 p-4 rounded hover:bg-gray-300 transition-all cursor-pointer">
            <a
              href="https://stackoverflow.com/users/17518690/madebyforev"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-stack-overflow"></i>
            </a>
          </div>
        </div>
      </h1>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <span>
            <h3 className="mb-3">{discordId}</h3>{" "}
            <Button
              onClick={() => {
                navigator.clipboard.writeText(discordId);
              }}
              variant="contained"
            >
              {" "}
              Copy
            </Button>
          </span>
        </Typography>
      </Popover>
    </>
  );
}

export default Home;
