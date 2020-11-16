import { DISHES } from '../shared/dishes';

{/*export const Dishes = (state=DISHES, action) => {
    switch(action.type){
        default:
            return state;
    }
};*/}

export function Dishes(state = DISHES, action){
    switch(action.type){
        default:
            return state;
    }
}
