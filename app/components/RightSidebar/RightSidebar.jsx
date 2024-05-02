"use client";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function RightSidebar() {
  const route = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams);

  const [search, setSearch] = useState(params.get("symbol") || "");
  const [status, setStatus] = useState(params.get("status") || "all");
  const [date, setDate] = useState(params.get("date") || 0);

  const handleChange = (event) => {
    const value = event.target.value;
    setDate(value);
    params.set("date", value);
    let q = params.toString();
    route.push(`?${q}`);
  };

  const handleRadio = (event) => {
    const value = event.target.value;
    setStatus(value);
    params.set("status", value);
    let q = params.toString();
    route.push(`?${q}`);
  };

  const handleSearch = (event) => {
    let query = event.target.value;

    setSearch(query);

    params.set("symbol", query);
    let q = params.toString();
    route.push(`?${q}`);
  };

  return (
    <>
      {/* <!-- Right Section --> */}
      <div className="right-section">
        <div className="nav">
          <button id="menu-btn">
            <span className="material-symbols-sharp"> menu </span>
          </button>
          <div className="dark-mode">
            <span className="material-symbols-sharp active"> light_mode </span>
            <span className="material-symbols-sharp"> dark_mode </span>
          </div>

          <div className="profile">
            <div className="info">
              <p>
                Hey, <b>Reza</b>
              </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img src="https://placehold.co/4000" />
            </div>
          </div>
        </div>
        {/* <!-- End of Nav --> */}

        <div className="user-profile">
          <div className="search">
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="Symbol"
                value={search}
                variant="outlined"
                onChange={handleSearch}
              />
            </FormControl>
          </div>
          <div className="date-filter">
            <FormControl fullWidth>
              <InputLabel id="demo-select-small-label">Date</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={date}
                label="Date"
                onChange={handleChange}
              >
                <MenuItem value={0}>None</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                <MenuItem value={40}>Fourty</MenuItem>
                <MenuItem value={50}>Fifty</MenuItem>
                <MenuItem value={60}>Sixty</MenuItem>
                <MenuItem value={90}>Ninty</MenuItem>
                <MenuItem value={365}>365</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="pl">
            <FormControl fullWidth>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Status
              </FormLabel>
              <RadioGroup
                row
                defaultValue={status}
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={handleRadio}
              >
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel
                  value="profit"
                  selected
                  control={<Radio />}
                  label="Profit"
                />
                <FormControlLabel
                  value="loss"
                  control={<Radio />}
                  label="Loss"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <div className="reminders">
          <div className="header">
            <h2>Reminders</h2>
            <span className="material-symbols-sharp"> notifications_none </span>
          </div>

          <div className="notification">
            <div className="icon">
              <span className="material-symbols-sharp"> volume_up </span>
            </div>
            <div className="content">
              <div className="info">
                <h3>Workshop</h3>
                <small className="text_muted"> 08:00 AM - 12:00 PM </small>
              </div>
              <span className="material-symbols-sharp"> more_vert </span>
            </div>
          </div>

          <div className="notification deactive">
            <div className="icon">
              <span className="material-symbols-sharp"> edit </span>
            </div>
            <div className="content">
              <div className="info">
                <h3>Workshop</h3>
                <small className="text_muted"> 08:00 AM - 12:00 PM </small>
              </div>
              <span className="material-symbols-sharp"> more_vert </span>
            </div>
          </div>

          <div className="notification add-reminder">
            <div>
              <span className="material-symbols-sharp"> add </span>
              <h3>Add Reminder</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
