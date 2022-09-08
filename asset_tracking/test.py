from datetime import datetime
import pytz

# get the standard UTC time
UTC = pytz.utc

# it will get the time zone
# of the specified location
IST = pytz.timezone('Asia/Kolkata')

# print the date and time in
# standard format
print("UTC in Default Format : ",
	datetime.now(UTC))

print("IST in Default Format : ",
	int(datetime.now(IST).timestamp()))

