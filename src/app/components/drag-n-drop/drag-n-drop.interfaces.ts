export interface CatsInfo {
    name: string;
    age: number;
    color: string;
    sex: string;
    isFixed: boolean;
}

// You can also use interfaces inside other interfaces
// The below interface will have all the properties of CatsInfo, as well
// as these two additional 
export interface CatsVetInfo extends CatsInfo {
    hasShots: boolean;
    nickname?: string;  // this ? indicates nickname is a nullable property
}