<FlexBetween gap="1rem">
<UserImage image={picturePath} />
<Box>
  <Typography
    variant="h4"
    color={dark}
    fontWeight="500"
    sx={{
      "&:hover": {
        color: palette.primary.light,
        cursor: "pointer",
      },
    }}
  >
    {firstName} {lastName}
  </Typography>
  <Typography color={medium}>{friendsConst.length} friends</Typography>
</Box>
</FlexBetween>