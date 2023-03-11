import { Box, TextField, Typography } from "@material-ui/core"

interface Props {
  placeholder?: string
  label?: string
}

export function Input({ placeholder, label }: Props) {
  return (
    <Box width={300}>
      <Typography variant="subtitle2" style={{ color: "whitesmoke" }}>
        {label}
      </Typography>
      <TextField
        placeholder={placeholder}
        variant="outlined"
        size="small"
        fullWidth
        multiline
        maxRows={3}
        InputProps={{
          style: { backgroundColor: "whitesmoke" },
        }}
      />
    </Box>
  )
}
