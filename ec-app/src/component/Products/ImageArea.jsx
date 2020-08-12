import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

const ImageArea = (props) => {
  return (
    <div className="u-text-right">
      <span>商品画像を登録する</span>
      <IconButton>
        <label>
          <AddPhotoAlternateIcon />
          <input
            className="u-display-none"
            type="file"
            id="image"
            
          />
        </label>
      </IconButton>
    </div>
  );
};

export default ImageArea;
