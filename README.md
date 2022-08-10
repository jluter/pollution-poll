
# Pollution Poll

Pollution Poll: Increasing climate change awareness by visualizing portions of a user's carbon footprint.


## Installation

Installing this project. (Ensure you have downloaded pollution-poll-server and started it)
https://github.com/jluter/pollution-poll-server


```bash
  git clone https://github.com/jluter/pollution-poll
  npm install
  npm start
```



## API Reference

#### Get an array of activities

```http
  GET /localhost:4444/activity
```

|Type     | Description                |
| :------- | :------------------------- |
`array` | An array of all activities |

#### Example ClimatIQ POST

```http
  POST https://beta3.api.climatiq.io/batch
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `emission_factor`      | `string` | **Required**. Id or activity name of item to fetch |
| `money`      | `number` | **Required**. Value to receive response |
| `money_id`      | `string` | **Required**. Type of measurment for money |



```javascript
    .post(
        "https://beta3.api.climatiq.io/batch",
        [
            {
            emission_factor: {
                uuid: //EXAMPLE_ID,
                },
            parameters: {
                money: //EXAMPLE_NUMBER,
                money_unit: "usd",
                }
            },
            {
            emission_factor: {
                uuid: "1eed671c-7e3d-44e2-85f5-57dc86372cea",
                },
            parameters: {
                money: 100, 
                money_unit: "usd",
                }
            }
        ],
        {
            headers: { Authorization: "Bearer YOUR_API_KEY_HERE" },
        }
````

## Features

- Responsive Design


## Tech Stack

**Client:** React, Sass, JavaScript, HTML, CSS, Axios

**Server:** Node, Express

**API:** Climatiq
## Authors

- [Jakob Luter](https://www.linkedin.com/in/jakob-luter/)



## Screenshots

![App Screenshot](https://imgur.com/9KrOCMg.jpeg)
![App Screenshot](https://imgur.com/V3Adj4r.jpeg)




