# Debouncing:

typing slow = 200ms typing fast = 30ms

Perfomance:

iphone pro max = 14 letter _ 1000 = 140000

with debouncing = 3 API calls _ 1000 = 3000

Debouncing with 200ms

if difference between 2 key strokes is <200ms - DECLINE API call
200ms make an API call

Cache: time complexity tro search in array = O(n) time complexity tro search in Object = O(1)

[i, ip, iph, iphone]

{ i: ip: iph: iphone: }

new Map();

# Live Data Implementation :

Challenges to handle LIVE DATA

1. DL(Data Layer) : Get the live DATA

2. UL(UI Layer) : Update the UI   

## There are two ways to handle Live Data

\*\*In Live chat applications You always have "WEBSOCKETS"

### 1. Web Sockets : UI < ==== > (no regular INTERVAL) SERVER

    ***Websocket connection is heavy

    Two servers connect to each other now they can send data any time to each other initial setup takes a time once setup is done is like handshake

    Once the connection is established you can send data in any direction whenever you want to (its a Bidirectional flow)
    
    eg. Time Critical App's they need real time data :  Trading App's (like, Kite, Binance, Grow), WhatsApp

### 2. API POLLING is also called LONG POLLING : UI(Requests) < === (INTERVAL) SERVER

    Data flow's from SERVER to UI. It's one directional after an Interval
   
    eg. Gmail, Cricbuzz(sweetSpot : 25 seconds )
