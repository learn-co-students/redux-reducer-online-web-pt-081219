
export function manageFriends(state = {
    friends: [],
  }, action) {
    switch(action.type) {
  
      case "ADD_FRIEND":
        return (
          {...state,
              friends: [
                ...state.friends,
                action.friend
              ]
          }
      )
  
      case "REMOVE_FRIEND":
        const removalIndex1 = state.friends.findIndex(friend => friend.id === action.id);

        return (
          {...state,
              friends: [
                ...state.friends.slice(0, removalIndex1),
                ...state.friends.slice(removalIndex1 + 1)
              ]
          }
        )
  
      default:
        return state;
  
    }
  };