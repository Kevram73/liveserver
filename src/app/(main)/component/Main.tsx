
import { CardContent, Typography, Grid, Tooltip, Fab } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import { Stack } from "@mui/system";
import BlankCard from "@/app/admin/components/shared/BlankCard";
import Image from "next/image";

const videoList = [
  {
    title: "Introducing Next.js",
    views: "1.5M views",
    thumbnail: "/images/products/s4.jpg",
    duration: "5:32",
  },
  {
    title: "React State Management",
    views: "2.2M views",
    thumbnail: "/images/products/s5.jpg",
    duration: "12:45",
  },
  {
    title: "Introducing Next.js",
    views: "1.5M views",
    thumbnail: "/images/products/s7.jpg",
    duration: "5:32",
  },
  {
    title: "React State Management",
    views: "2.2M views",
    thumbnail: "/images/products/s11.jpg",
    duration: "12:45",
  },
  {
    title: "Introducing Next.js",
    views: "1.5M views",
    thumbnail: "/images/products/s11.jpg",
    duration: "5:32",
  },
  {
    title: "React State Management",
    views: "2.2M views",
    thumbnail: "/images/products/s7.jpg",
    duration: "12:45",
  },
  {
    title: "Introducing Next.js",
    views: "1.5M views",
    thumbnail: "/images/products/s4.jpg",
    duration: "5:32",
  },
  {
    title: "React State Management",
    views: "2.2M views",
    thumbnail: "/images/products/s5.jpg",
    duration: "12:45",
  },
  // Add more video entries
];

const Main = () => {
  return (
    <Grid container spacing={3}>
      {videoList.map((video, index) => (
        <Grid item xs={12} md={4} lg={3} key={index}>
          <BlankCard>
            <Image
              src={video.thumbnail}
              alt="Video Thumbnail"
              width={300}
              height={200}
            />
            <Tooltip title="Play Video">
              <Fab
                size="medium"
                color="secondary"
                sx={{ bottom: "75px", right: "15px", position: "absolute" }}
              >
                <PlayCircleOutline />
              </Fab>
            </Tooltip>
            <CardContent sx={{ p: 3, pt: 2 }}>
              <Typography variant="subtitle1">{video.title}</Typography>
              <Stack direction="row" alignItems="center" mt={1}>
                <Typography variant="body2">{video.views}</Typography>
                <Typography variant="body2" sx={{ marginLeft: "auto" }}>
                  {video.duration}
                </Typography>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Main;