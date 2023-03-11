import { Box, Fab, TextField, Typography } from "@material-ui/core"
import { Formik } from "formik"
import { StoryObj } from "../../types/Story"
export function Form() {
  const initialValues: StoryObj = {
    primaryCharacter: "",
    secondaryCharacter: "",
    start: "",
    end: "",
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box
            style={{
              backgroundColor: "#3f50b5",
              borderRadius: 8,
              width: 400,
              height: 500,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            padding={2}
          >
            <Box pt={2} pb={1}>
              <Typography
                style={{ textAlign: "center", color: "whitesmoke" }}
                variant="h5"
              >
                Create your bedtime story
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              py={1}
              width={"90%"}
              height={"85%"}
            >
              <Box my={0.5}>
                <Typography variant="subtitle2" style={{ color: "whitesmoke" }}>
                  Primary Character
                </Typography>
                <TextField
                  name="primaryCharacter"
                  value={values.primaryCharacter}
                  placeholder="a Princess"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    style: { backgroundColor: "whitesmoke" },
                  }}
                  onChange={handleChange}
                />
              </Box>

              <Box my={0.5}>
                <Typography variant="subtitle2" style={{ color: "whitesmoke" }}>
                  Secondary Character
                </Typography>
                <TextField
                  name="secondaryCharacter"
                  value={values.secondaryCharacter}
                  placeholder="a Prince"
                  variant="outlined"
                  size="small"
                  fullWidth
                  InputProps={{
                    style: { backgroundColor: "whitesmoke" },
                  }}
                  onChange={handleChange}
                />
              </Box>
              <Box my={0.5}>
                <Typography variant="subtitle2" style={{ color: "whitesmoke" }}>
                  How would you like your story to begin?
                </Typography>
                <TextField
                  name="start"
                  value={values.start}
                  placeholder="There was a princess that had been captured in a castle"
                  variant="outlined"
                  size="small"
                  fullWidth
                  multiline
                  maxRows={2}
                  InputProps={{
                    style: { backgroundColor: "whitesmoke" },
                  }}
                  onChange={handleChange}
                />
              </Box>
              <Box my={0.5}>
                <Typography variant="subtitle2" style={{ color: "whitesmoke" }}>
                  How would you like your story to end?
                </Typography>
                <TextField
                  name="end"
                  value={values.end}
                  placeholder="The prince saved her and they lived happily ever after"
                  variant="outlined"
                  size="small"
                  fullWidth
                  multiline
                  maxRows={2}
                  InputProps={{
                    style: { backgroundColor: "whitesmoke" },
                  }}
                  onChange={handleChange}
                />
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" py={2}>
              <Fab
                variant="extended"
                style={{
                  color: "whiteSmoke",
                  backgroundColor: "lightcoral",
                  width: 250,
                }}
                type="submit"
              >
                <Typography variant="button">Create Story</Typography>
              </Fab>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  )
}
