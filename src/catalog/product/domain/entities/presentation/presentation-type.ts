import { EnumValueObject } from "../../../../../shared/domain/value_objects/enum-value-object";

export class PresentationType extends EnumValueObject {
    private static validTypes = ["bag", "sack", "box", "bottle", "can", "jar", "bottle"]

    constructor(value: string) {
        super(value, PresentationType.validTypes);
    }
}