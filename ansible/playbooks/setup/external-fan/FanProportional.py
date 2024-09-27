import subprocess  # Calling subprocess to get the CPU temperature
from gpiozero import PWMLED
from time import sleep

# GPIO 14 as PWM
fan = PWMLED(14)


# Function to read in the CPU temperature and return it as a float in degrees celcius
def get_temp():
  output = subprocess.run(['vcgencmd', 'measure_temp'], capture_output=True)
  temp_str = output.stdout.decode()
  try:
    return float(temp_str.split('=')[1].split('\'')[0])
  except (IndexError, ValueError):
    raise RuntimeError('Could not get temperature')


def calculate_fan_speed(temp, min_temp=40, max_temp=70):
  if temp < min_temp:
    return 0
  elif temp > max_temp:
    return 100
  else:
    # Oblicz proporcjonalną wartość w zakresie 0-100
    return (temp - min_temp) / (max_temp - min_temp) * 100


while 1:
  temp = get_temp()
  fan_speed = calculate_fan_speed(temp)
  fan.value = fan_speed / 100
  print(f"Temp: {temp}. Fan speed: {fan_speed}")
  sleep(5)
