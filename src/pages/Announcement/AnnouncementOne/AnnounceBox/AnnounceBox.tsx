import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { $image_api } from "../../../../api";
import { IOneAnnouncementResponse } from "../../../../types/Announcement/OneAnnouncement.type";
import { StatementEnum, WheelEnum } from "../../../../types/Enums";
import numberWithSpaces from "../../../../utils/numberWithSpaces";
import AnnounceBoxImage from "./AnnounceBoxImage";

interface Props {
  aData: IOneAnnouncementResponse;
}

const AnnounceBox: FC<Props> = ({ aData }) => {
  const { a } = aData;

  const stateData = [
    { id: 0, title: "Город", value: a.city.title },
    { id: 1, title: "Поколение", value: "Поколение" },
    { id: 2, title: "Кузов", value: a.body.title },
    { id: 3, title: "Объем двигателя", value: "Объем двигателя" },
    { id: 4, title: "Пробег", value: a.about?.mileage },
    { id: 5, title: "Коробка передач", value: "Коробка Передач" },
    { id: 6, title: "Привод", value: a.about?.driveUnit },
    { id: 7, title: "Руль", value: a.about?.steeringWheel },
    { id: 8, title: "Цвет", value: "Цвет" },
    { id: 9, title: "Растаможен в КЗ", value: a.about?.customsClearance },
    { id: 10, title: "Состояние", value: a.about?.state },
  ];

  return (
    <Stack
      direction="row"
      sx={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "20px",
        gap: "20px",
      }}
    >
      <Stack sx={{ flex: 1.25 }}>
        <AnnounceBoxImage images={a.images} />

        {/* <Stack
          sx={{
            backgroundColor: "#000",
            flex: 1,
            minHeight: "350px",
            borderRadius: "10px",
          }}
        >
          <Box
            component={"img"}
            src={`${$image_api}${a?.images[0]?.image}`}
            sx={{
              flex: 1,
              width: "100%",
              borderRadius: "15px",

              backgroundRepeat: "no-repeat",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </Stack> */}
      </Stack>
      <Stack spacing={2} sx={{ flex: 1 }}>
        <Stack
          sx={{
            backgroundColor: "#F4F4F4",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#000",
              lineHeight: "28.64px",
            }}
          >{`${a.marka.title} ${a.model.title}`}</Typography>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#2DC36A",
              lineHeight: "28.64px",
            }}
          >
            {numberWithSpaces(a.price)}KZT
          </Typography>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "#F4F4F4",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#000",
              lineHeight: "23.87px",
            }}
          >
            Описание
          </Typography>
          <Typography sx={{ color: "#878787", fontSize: "16px" }}>
            {a.description}
          </Typography>
        </Stack>
        <Stack
          sx={{
            backgroundColor: "#F4F4F4",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#000",
              lineHeight: "23.87px",
            }}
          >
            Опции и характеристики
          </Typography>
          <Stack direction="row" sx={{ flex: "wrap", gap: "8px" }}>
            <Box
              sx={{
                padding: "4px 8px",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
            >
              <Typography
                sx={{
                  display: "inline-block",
                  fontSize: "13px",
                  fontWeight: 600,
                  lineHeight: "15.51px",
                }}
              >
                Опции
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          flex: 1,
          backgroundColor: "#F4F4F4",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#000",
            lineHeight: "23.87px",
          }}
        >
          Общее описание
        </Typography>
        <Stack>
          {stateData.map((row) => (
            <Stack key={row.id} spacing={1} sx={{ paddingTop: "0.5rem" }}>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{
                    flex: "1",
                    color: "secondary.900",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {row.title}
                </Typography>
                <Typography
                  sx={{
                    flex: "1",
                    display: "display",
                    alignItems: "center",
                    fontWeight: 500,
                  }}
                >
                  {row.id === 3
                    ? `${row.value}л`
                    : row.id === 4
                    ? `${numberWithSpaces(Number(row.value))}км`
                    : row.id === 7
                    ? row.value === WheelEnum.LEFT
                      ? "Слева"
                      : "Справа"
                    : row.id === 9
                    ? row.value
                      ? "Да"
                      : "Нет"
                    : row.id === 10
                    ? row.value === StatementEnum.EMERGENCY
                      ? "Аварийная"
                      : row.value === StatementEnum.NEW
                      ? "Новое"
                      : "Б/У"
                    : row.value}
                </Typography>
              </Box>
              {stateData.length !== row.id + 1 && <Divider />}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AnnounceBox;
