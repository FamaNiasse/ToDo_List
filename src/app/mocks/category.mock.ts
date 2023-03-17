type CategoryType = "shopping" | "health" | "work" | "bills" | "cleaning" | "other";

export interface ITodo {
    id: number;
    content: string;
    category: CategoryType;
    picture: string;
    isUrgent: boolean;
    doneDate: Date | null;
}

export interface Image{
    id: number;
    picture: string;
}


export const IMAGE : Image[] = [

   { id: 1,
    picture: "assets/img/shopping.png"
},

{ id: 2,
    picture: "assets/img/health.png"
},

{ id: 3,
    picture: "assets/img/work.png"
},

{ id: 4,
    picture: "assets/img/bills.png"
},

{ id: 5,
    picture: "assets/img/cleaning.png"
},

{ id: 6,
    picture: "assets/img/other.png"
},

]

