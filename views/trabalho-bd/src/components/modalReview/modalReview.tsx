import "./modalReview.scss";
import { Box, Typography, TextField } from "@mui/material";
import type { Media } from "../../types/media";
import CloseIcon from "@mui/icons-material/Close";
import { CardMedia } from "../UI/cardMedia/cardMedia";
import Rating from "@mui/material/Rating";
import { useState, useEffect } from "react";
import { ActionButton } from "../UI/actionButton/actionButton";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

interface ModalReviewProps {
  openReview: Boolean;
  media: Media;
  isEditing: Boolean;
  onClickClose: (type: boolean) => void;
}

export const ModalReview = ({
  openReview,
  media,
  isEditing,
  onClickClose,
}: ModalReviewProps) => {
  const [rating, setRating] = useState<number | null>(0.0);
  const [review, setReview] = useState("");

  useEffect(() => {
    if(!openReview){
      setReview("");
      setRating(0);
    }
  }, [openReview])

  useEffect(() => {
    if(openReview){
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "";
    }
  }, [openReview])


  return (
    <Box
      component="div"
      className={`modal-review-root ${!openReview ? "disable" : ""}`}
    >
      <Box component={"div"} className="modal-review__result">
        <Box component={"div"} className="modal-review__header">
          <Typography variant="h3" className="header__title">
            {isEditing ? "Editar resenha" : "Nova resenha"}
          </Typography>

          <Box component="div" className="header__close">
            <CloseIcon
              className="close-icon"
              fontSize="small"
              onClick={() => {
                onClickClose(false)
              }}
            />
          </Box>
        </Box>

        <Box component={"div"} className="modal-review__media">
          <CardMedia
            media={media}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            onClick={() => () => {}}
            onBlur={() => () => {}}
          />
          <Box component={"div"} className="media-info">
            <Typography variant="body1" className="media-info__title">
              {media.name}
            </Typography>
            <Typography
              variant="body1"
              className="media-info__details"
            >{`${media.releaseYear} - ${media.genders.map((g) => g)}`}</Typography>
          </Box>
        </Box>

        <Box component={"div"} className="modal-review__rate">
          <Typography variant="body1" className="rate__title">
            Sua nota
          </Typography>
          <Rating
            className="rate__stars"
            name="media-rating"
            value={rating}
            precision={0.5}
            onChange={(_, newValue: number | null) => {
              setRating(newValue);
            }}
          />
        </Box>

        <Box component={"div"} className="modal-review__review">
          <Typography variant="body1" className="review__title">
            Resenha
          </Typography>

          <TextField
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="review__textfield"
            multiline
            minRows={3}
            maxRows={5}
            fullWidth
            placeholder="O que você achou?"
            required
          />
        </Box>

        <ActionButton
          icon={<SendOutlinedIcon />}
          className="modal-review__send-button"
        >
          Enviar Resenha
        </ActionButton>
      </Box>
    </Box>
  );
};
