source .env
export DEVICE_IP=$(hostname -I | cut -d ' ' -f 1)
