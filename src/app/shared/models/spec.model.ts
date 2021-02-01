export interface Spec {
    color: string;
    icon: string;
    spells: any[];
    name: string;
}

export interface Spell {
    id: string;
    icon: string;
    name: string;
    cooldown: number;
}
