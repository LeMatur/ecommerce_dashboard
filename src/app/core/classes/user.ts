

export class User{
    email:	string = "";
    firstName:	string = "";
    id:	number = 0;
    lastName:	string = "";
    password:	string = "";
    phoneNumber:	string = "";
    userName:	string = "";
    city: string = "";
    dateOfIssue: any;
    dateOfValidity: any;
    mainAddress: string = "";
    nationalIDNumber: string = "";
    nationality: string = "";
    numberOfChildren: number = 0;
    pieceId: string = "";
    placeOfIssue: string = "";
    postalBox: string = "";
    secondPhoneNumber: string = "";
    secondaryAddress: string = "";
    secondaryEmail: string = "";
    whatsappPhoneNumber: string = "";
    remainingToPayByUser: number = 0;
    toBePaidByUser: number = 0;
    penaltiesToPay: number = 0;
    remainingToPay: number = 0;
    upToDate: boolean = false;
    sponsoredUsers: User[] = []
}