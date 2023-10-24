
int main() {
  float score;
  printf("Enter your score: ");
  scanf("%f", &score);
  if(score>= 85 && score <= 100)
  {
    printf("Grade A");
  }
  else {
    if(score >= 75 && score <= 84 )
    {
      printf("Grade B");
    }
    else {
      if(score >= 65 && score <= 74)
      {
        printf("Grade C");
      }
      else {
        if(score >= 50 && score <= 64)
        {
          printf("Grade D");
        }
        else {
          if(score >= 0 && score <= 49)
          {
            printf("Grade F");
          }
          else {
            printf("Invalid score");
          }
        }
      }
    }
  }
}
