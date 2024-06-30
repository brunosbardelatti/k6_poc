IMAGE_NAME="alicek6"
TEST_TYPE=${1:-rampingVus}

echo "Building Docker image..."
docker build --no-cache -t $IMAGE_NAME .

if [ ! -d "reports" ]; then
  mkdir reports
fi

LOG_FILE="reports/k6_error.log"

echo "Running Docker container..."
docker run --rm -v $(pwd)/reports:/k6/reports -e TEST_TYPE=$TEST_TYPE $IMAGE_NAME 2> $LOG_FILE

if [ $? -eq 0 ]; then
  echo "Tests executed successfully, reports are available in the 'reports' directory."
else
  echo "There was an error running the tests. Check the log file for details."
  cat $LOG_FILE
fi

if [ ! -s $LOG_FILE ]; then
  rm $LOG_FILE
fi