#!/usr/bin/env bash
set -e

echo "[run.sh] Starting Docker services..."
docker-compose up -d

echo "[run.sh] Waiting for MongoDB to be ready..."
ATTEMPTS=0
MAX_ATTEMPTS=60

until docker exec mongodb mongosh -u root -p password123 --authenticationDatabase admin --eval "db.adminCommand('ping')" >/dev/null 2>&1; do
  ATTEMPTS=$((ATTEMPTS+1))
  if [ "$ATTEMPTS" -ge "$MAX_ATTEMPTS" ]; then
    echo "[run.sh] MongoDB did not become ready in time."
    exit 1
  fi
  echo "[run.sh] MongoDB not ready yet, retrying in 2s... (attempt $ATTEMPTS/$MAX_ATTEMPTS)"
  sleep 2
done

echo "[run.sh] MongoDB is ready. Waiting for backend service..."
ATTEMPTS=0
until curl -s http://localhost:5000/health >/dev/null 2>&1; do
  ATTEMPTS=$((ATTEMPTS+1))
  if [ "$ATTEMPTS" -ge "$MAX_ATTEMPTS" ]; then
    echo "[run.sh] Backend service did not become ready in time."
    exit 1
  fi
  echo "[run.sh] Backend not ready yet, retrying in 2s... (attempt $ATTEMPTS/$MAX_ATTEMPTS)"
  sleep 2
done

echo "[run.sh] Backend is responding. Waiting for frontend service..."
ATTEMPTS=0
until curl -s http://localhost:3000 >/dev/null 2>&1; do
  ATTEMPTS=$((ATTEMPTS+1))
  if [ "$ATTEMPTS" -ge "$MAX_ATTEMPTS" ]; then
    echo "[run.sh] Frontend service did not become ready in time."
    exit 1
  fi
  echo "[run.sh] Frontend not ready yet, retrying in 2s... (attempt $ATTEMPTS/$MAX_ATTEMPTS)"
  sleep 2
done

echo "[run.sh] All services are up and responding: MongoDB (27017), backend (5000), frontend (3000)."
