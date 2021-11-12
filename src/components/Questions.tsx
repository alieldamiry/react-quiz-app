import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectAnswer } from "../redux/slices/mainSlice";

const Questions = () => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector((state) => state.main.questions);
  const [page, setPage] = useState(0);
  const [question, setQuestion] = useState<any>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      selectAnswer({ questionId: question.id, answer: +event.target.value })
    );
  };

  useEffect(() => {
    setQuestion(questions[page]);
  }, [page]);

  const submitHandler = (e: any) => {
    console.log(question);

    e.preventDefault();
    if (page < questions.length - 1) {
      setPage((prevPage) => prevPage + 1);
    } else {
      const correctAnswers = questions.map((question) => {
        if (question.userAnswerId === question.correctId) {
          return 1;
        } else {
          return 0;
        }
      });
      console.log(correctAnswers);
      const score = correctAnswers.reduce((acc: number, curr: number) => {
        return acc + curr;
      }, 0);

      alert(`Your Score is ${score}`);
    }
  };

  return (
    <div>
      <Container>
        <Typography component="h4" sx={{ mb: 3 }} variant="h4">
          {question.text}
        </Typography>
        <form onSubmit={submitHandler}>
          <FormControl component="fieldset" name={question.text}>
            <RadioGroup
              aria-label={question.text}
              name={question.text}
              value={question.userAnswerId}
              onChange={handleChange}
            >
              {question.options?.map((option: any) => (
                <FormControlLabel
                  key={option.id}
                  value={option.id}
                  control={<Radio />}
                  label={option.text}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained">
              Next
            </Button>
          </Box>
        </form>
      </Container>
    </div>
  );
};

export default Questions;
