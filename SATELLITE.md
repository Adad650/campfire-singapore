# How two make your Campfire Satellite site

## 1. Copy the [template JSON](https://github.com/hackclub/campfire/blob/a4ff4f9423dcb5283fc4d46229365a2cdfa8a32e/sample.json)

Paste the template JSON into a text editor (or you could also just use [this](https://jsoneditoronline.org/) to edit it). 

## 2. Edit the fields you need
(This is not necessary if your event is Campfire Shelburne. If your event is not Campfire Shelburne, you should probably change these fields.)

Ignore the `localization` field unless you want to translate the entire site to your desired language.

### Change event details
```json
    "city": "Shelburne",
    "date": "Feb 28 - Mar 1, 2026",
    "venue": {
      "name": "Hack Club HQ",
      "link": "https://maps.app.goo.gl/CkobY6fVLu2gVUsx8"
    },
```
- Update `city` to your desired city. 
- Change the `name` of the venue to the venue of your event. 
- Update the `link` with the link to your event on Google Maps (or other).

### Change event schedule
```json
    "schedule": {
      "days": [
        {
          "date": "Feb 28th",
          "items": [
            { "time": "7:45 AM", "activity": "Doors open" },
            { "time": "8:00-8:45 AM", "activity": "Icebreakers" },
            { "time": "9:00-9:45 AM", "activity": "Opening Ceremony" },
            { "time": "10:15 AM-12:15 PM", "activity": "Godot Workshop" },
            { "time": "12:45-1:45 PM", "activity": "Lunch" },
            { "time": "2:00-3:00 PM", "activity": "Ren'py Workshop" },
            { "time": "3:00-3:30 PM", "activity": "Hackathon Hosting 101 With Hack Canada" },
            { "time": "4:00-4:15 PM", "activity": "Typing Contest" },
            { "time": "6:00-7:00 PM", "activity": "Project Pitch and Dinner" },
            { "time": "6:45-7:30 PM", "activity": "Just Dance" },
            { "time": "7:35-7:45 PM", "activity": "Semi-Closing" }
          ]
        }
      ]
    },
```
- If your event is a multi-day event, you can add more days to the `days` array.
- Update the `date` for each day to match your event
- Update the `items` array for each day to match your event schedule
    - `time`: The time of the activity
    - `activity`: The name of the activity

### Change sponsors info
```json
    "sponsors": {
      "cards": [
        {
          "sponsor": "Hack Club",
          "logo": "https://assets.hackclub.com/flag-standalone-wtransparent.svg",
          "link": "https://hackclub.com"
        }
      ]
    },
```
- You can add more sponsors to the `cards` array
- Update the `sponsor`, `logo`, and `link` for each sponsor
    - `sponsor`: The name of the sponsor
    - `logo`: The URL of the sponsor's logo. It should point to an image.
    - `link`: The URL of the sponsor's website

There are other fields that are not mentioned here that you can change! Feel free to customize your campfire site to your liking.

## 3. Submit the JSON to the site

Once you're satisfied with your campfire site, submit the JSON to this [form](https://forms.hackclub.com/t/v2Kth9u16wus).

## 4. Troubleshooting

- If you go to your site and see...
    - *"Invalid JSON"*, make sure that the JSON is valid and that there are no syntax errors.
    - *"Please update your JSON"*, you were likely using an outdated JSON template. Make sure you're using this [template](https://github.com/hackclub/campfire/blob/a4ff4f9423dcb5283fc4d46229365a2cdfa8a32e/sample.json).
    - *something is missing.* Check if you're missing any fields in your JSON.
    - *a 404.* Check if you're using the correct slug for your event!
    - *a blue screen.* Either you messed up real bad or I messed up real bad. Please reach out to @manitej.

- If you're having trouble submitting the form, reach out to @Dev. 
- If you have any questions, reach out to your regional manager.