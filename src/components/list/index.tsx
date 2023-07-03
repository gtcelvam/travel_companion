import { ChangeEvent, useState } from "react";
import S from "./list-style";
import { SelectChangeEvent, Typography } from "@mui/material";

const List = () => {
  //state values
  const [type, setType] = useState("");
  const [rating, setRating] = useState(0);

  //functions
  const handleTypeChange = (e: SelectChangeEvent<unknown>) => {
    setType(e.target.value as unknown as string);
  };

  const handleRatingChange = (e: SelectChangeEvent<unknown>) => {
    setRating(e.target.value as unknown as number);
  };

  return (
    <S.ListContainer>
      <Typography variant="h4">
        Restaurants, Hotels & Attractions around you!
      </Typography>
      {/* Select Type */}
      <S.ListFormControl>
        <S.ListFormInputLabel>Type</S.ListFormInputLabel>
        <S.ListFormSelect value={type} onChange={handleTypeChange}>
          <S.ListFormMenuItem value="restaurants">
            Restaurants
          </S.ListFormMenuItem>
          <S.ListFormMenuItem value="hotels">Hotels</S.ListFormMenuItem>
          <S.ListFormMenuItem value="attractions">
            Attractions
          </S.ListFormMenuItem>
        </S.ListFormSelect>
      </S.ListFormControl>
      {/* Select Type Ends Here*/}

      {/* Select Rating */}
      <S.ListFormControl>
        <S.ListFormInputLabel>Rating</S.ListFormInputLabel>
        <S.ListFormSelect value={rating} onChange={handleRatingChange}>
          <S.ListFormMenuItem value={0}>All</S.ListFormMenuItem>
          <S.ListFormMenuItem value={3}>Above 3.0</S.ListFormMenuItem>
          <S.ListFormMenuItem value={4}>Above 4.0</S.ListFormMenuItem>
          <S.ListFormMenuItem value={4.5}>Above 4.5</S.ListFormMenuItem>
        </S.ListFormSelect>
      </S.ListFormControl>
      {/* Select Rating Ends Here */}
    </S.ListContainer>
  );
};

export default List;
