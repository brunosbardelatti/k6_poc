IMAGE_NAME="alicek6"
TEST_TYPE=${1:-rampingVus}

echo "Building Docker image..."
docker-compose build

if [ ! -d "reports" ]; then
  mkdir reports
fi

LOG_FILE="reports/k6_error.log"

echo "Running Docker container..."
docker-compose up -d influxdb grafana

docker-compose run --rm -v $(pwd)/reports:/k6/reports -e TEST_TYPE=$TEST_TYPE k6 2> $LOG_FILE

if [ $? -eq 0 ]; then
  echo "Tests executed successfully, reports are available in the 'reports' directory."
else
  echo "There was an error running the tests. Check the log file for details."
  cat $LOG_FILE
fi

if [ ! -s $LOG_FILE ]; then
  rm $LOG_FILE
fi

echo "Access the Grafana dashboard at http://localhost:3000/d/k6/k6-load-testing-results"
