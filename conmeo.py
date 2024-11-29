import pandas as pd

# Read the CSV file
df = pd.read_csv('data_visits.csv')

# Convert the timestamp column to datetime
df['timestamp'] = pd.to_datetime(df['timestamp'], format='%m/%d/%Y %H:%M')

# Extract the date from the timestamp
df['date'] = df['timestamp'].dt.date

# Group by date and count the number of visits
summary = df.groupby('date').size().reset_index(name='total_visits')

# Print the summary
print(summary)

# Optionally, save the summary to a new CSV file
summary.to_csv('summary_visits.csv', index=False)