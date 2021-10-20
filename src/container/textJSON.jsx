import React, { Component } from "react";
import {
  TextField,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextareaAutosize,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";

class textJSON extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textBoxDetails: "",
      jsonData: [],
      selectData: 0,
      radioData: 0,
    };
  }
  handleSubmit = () => {
    const { textBoxDetails } = this.state;
    const val = JSON.stringify(eval("(" + textBoxDetails + ")"));
    this.setState({ jsonData: JSON.parse(val) });
  };
  render() {
    const { jsonData, selectData, radioData } = this.state;
    return (
      <div className="col-12">
        <div className="col-12 main_div d-flex flex-column text-center">
          <div className="col-12">
            <TextareaAutosize
              className="w-50"
              maxRows={10}
              minRows={4}
              maxCol
              aria-label="maximum height"
              placeholder="Please Enter Text as JSON Format"
              defaultValue=""
              onChange={(e) =>
                this.setState({ textBoxDetails: e.target.value })
              }
            />
          </div>
          <div>
            <Button
              className="col-2"
              size="small"
              variant="outlined"
              onClick={this.handleSubmit}
            >
              Evaluate
            </Button>
          </div>
        </div>
        {jsonData && (
          <div className="col-12 text-center pt-3">
            {jsonData.map((ele, val) => (
              <>
                <div className="col-12 p-1">
                  {ele.fieldType === "TextBox" && (
                    <TextField key={val} label={ele.label} value={ele.name} />
                  )}
                  {ele.fieldType === "DropDown" &&
                    ele.DataSource &&
                    ele.DataSource.length && (
                      <FormControl sx={{ m: 1, minWidth: 210 }}>
                        <InputLabel id="demo-simple-select-label">
                          {ele.label}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label={ele.label}
                          key={selectData}
                          value={selectData}
                          onChange={(e) => {
                            this.setState({ selectData: e.target.value });
                          }}
                        >
                          {ele.DataSource &&
                            ele.DataSource.map((ele, val) => (
                              <MenuItem key={val} value={val}>
                                {ele}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    )}
                  {ele.fieldType === "RadioButton" &&
                    ele.DataSource &&
                    ele.DataSource.length && (
                      <FormControl component="fieldset">
                        <FormLabel component="legend">{ele.label}</FormLabel>
                        <RadioGroup
                          aria-label="city"
                          name="radio-buttons-group"
                          value={radioData}
                          onChange={(e) => {
                            this.setState({ radioData: e.target.value });
                          }}
                        >
                          {ele.DataSource &&
                            ele.DataSource.map((ele, val) => (
                              <FormControlLabel
                                value={val}
                                control={<Radio />}
                                label={ele}
                              />
                            ))}
                        </RadioGroup>
                      </FormControl>
                    )}
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default textJSON;
