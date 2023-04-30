import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ICustomSelectProps } from "../utils/type/types";
import { list } from "../utils";
import { SelectChangeEvent } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const CustomSelect = (props: ICustomSelectProps) => {
  const {
    setterFunction,
    setVariable,
    filteringCriteria,
    data,
    inputCategory,
    setCriteriaChanged,
  } = props;

  // const [criteriaUpdated, setCriteriaUpdated] = useState(true)

  const evaluateIfCriteriaChanged = (changeValue: string): boolean => {
    if (list?.includes(changeValue)) {
      setCriteriaChanged?.(true);
      return true;
    } else {
      setCriteriaChanged?.(false);
      return false;
    }
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    evaluateIfCriteriaChanged(value);
    setterFunction(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={setVariable}
          onChange={handleChange}
          input={<OutlinedInput />}
          displayEmpty
          MenuProps={MenuProps}
        >
          <MenuItem disabled value="">
            <em>{filteringCriteria}</em>
          </MenuItem>
          {data?.slice(0, 23)?.map((item: any, index: number) => {
            return (
              <MenuItem
                key={item + index}
                value={inputCategory === "Criteria" ? item : item?.time}
              >
                {inputCategory === "Criteria" ? item : item?.time}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
