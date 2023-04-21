import { Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { $image_api } from "../../../../../api";
import { FC } from "react";
import { IOneImage } from "../../../../../types/Announcement/OneAnnouncement.type";

import "./AnnounceBoxImage.style.scss";

interface Props {
  images: IOneImage[];
}

const AnnounceBoxImage: FC<Props> = ({ images }) => {
  return (
    <Box sx={{ backgroundColor: "grey.0", maxWidth: "500px" }}>
      <Swiper
        className={"images"}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {images.map((row, index) => (
          <SwiperSlide key={index}>
            <Stack
              sx={{
                backgroundColor: "#000",
                flex: 1,
                minHeight: "350px",
                borderRadius: "10px",
              }}
            >
              <Box
                component={"img"}
                src={`${$image_api}${row.image}`}
                sx={{
                  flex: 1,
                  width: "100%",
                  borderRadius: "15px",

                  backgroundRepeat: "no-repeat",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default AnnounceBoxImage;
