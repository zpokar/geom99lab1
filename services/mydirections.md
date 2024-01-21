# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=Laurentian+Ski+Hill&destination=Montmorency+Falls&avoid=tolls|highways|ferries&destination=Montmorency+Falls&mode=Driving&origin=Laurentian+Ski+Hill&waypoints=optimize:true|via:Rideau+Canal|via:Place+des+Festivals&waypoint_order=[0,1,3,2]&unit=imperial&region=cn&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

Copy/paste the JSON results and save them into the empty file ```mydirections.json``` in this repository

## Optional URLs

Read the Rubric to find out about what options exist to earn more marks. Here is where you can provide these additional links to place ids or other items telling a story about your chosen directions API

### Simple option:

(returns map-preferred) Maps PlaceID search:https://www.google.com/maps/place/Laurentian+Ski+Hill/@46.3377578,-79.4322181,17z/data=!3m1!4b1!4m6!3m5!1s0x4d29aacb467a0259:0x877b13b10e3dbac5!8m2!3d46.3377578!4d-79.4322181!16s%2Fg%2F1hg4xkryn?entry=ttu
### Efficient option

(returns JSON) API PlaceID link https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ4Q7ViTsayUwRmoxxpGPEjUw&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

  which the JSON will have a CID that can be directly used as a URL like https://maps.google.com/?cid=ChIJWQJ6RsuqKU0Rxbo9DrETe4c


____
## Rubric

Note: MarkDown (.md) documents are not HTML and therefore are best viewed in the github.com website, not on the pages github.io page. Marking will occur using the github.com source. 

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown and results in the JSON file with a unique origin and destination in directions earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%. Explore the API documentation for parameters we have not used.
4. Tell the story of your route. Include more than 2 "stops", and/or including additional links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
