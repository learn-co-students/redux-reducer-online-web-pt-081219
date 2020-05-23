export function manageFriends(state, action){

    switch (action.type) {
        case "ADD_FRIEND":
            return {
                ...state,
                friends: [
                    ...state.friends,
                    action.friend 
                ]
            }
            case "REMOVE_FRIEND":
                const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
                return (
                  {...state,
                      friends: [
                        ...state.friends.slice(0, removalIndex),
                        ...state.friends.slice(removalIndex + 1)
                      ]
                  }
                )
          

        default: return state
    }
}

{ friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Joe', hometown: 'Boston', id: 101 }, { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Joe', hometown: 'Boston', id: 101 }, { name: 'Steven', hometown: 'Philadephia', id: 102 } ] }
{ friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }, { name: 'Steven', hometown: 'Philadephia', id: 102 } ] }