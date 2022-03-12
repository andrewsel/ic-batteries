<script>
  // @ts-ignore
  import { message } from "../scripts/plug.js"
  export let room
  export let leaveRoom
  export let img
  export let imgAlt
  export let principalId
  export let messages = []

  let filteredMessages = []
  $: if (messages) {
    let roomArr = []
    messages.map((m) => {
      if (m.room == room) {
        roomArr.push(m)
      }
    })
    filteredMessages = roomArr.slice(roomArr.length - 4, roomArr.length - 1)
  }

  let newMessage = ""

  async function sendMessage() {
    filteredMessages = [
      ...filteredMessages,
      {
        message: newMessage,
        principalId,
      },
    ]
    const response = await message(room, newMessage)
    console.log(response)
  }
</script>

<div class="inside-room">
  <h2>Welcome to Room {room}</h2>
  <img src={img} alt={imgAlt} />
  <div class="messages">
    {#each filteredMessages as message}
      <div class="message">
        <div class="message-text">{message.message}</div>
        <div class="id">{message.principalId}</div>
      </div>
    {/each}
    <div class="add-message">
      <input bind:value={newMessage} type="text" placeholder="Add a message" />
      <button on:click={sendMessage}>Send</button>
    </div>
  </div>

  <p class="leave" on:click={leaveRoom}>Leave Room</p>
</div>

<style lang="scss">
  h2 {
    margin-bottom: 20px;
  }

  img {
    height: 100px;
  }

  .messages {
    margin: 20px 0;
    width: 400px;
    max-width: 100%;
    // border: 1px solid white;
  }

  .message {
    margin: 10px 0;
  }

  .id {
    font-size: 12px;
    color: #949494;
  }

  .add-message {
    // border: 1px solid white;
    input {
      background-color: transparent;
      color: white;
      padding: 10px;
      width: 100%;
      border: 1px solid white;
    }
    button {
      background-color: #74ff75;
      border: 0;
      width: 100%;
      font-weight: bold;
      font-size: 14px;
      padding: 6px 20px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .inside-room {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: black;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      max-width: 30vw;
      max-height: 50vh;
    }
    p.leave {
      margin-top: 30px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
</style>
