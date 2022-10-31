import {
    Promotion
} from "../promotion"
import {
    Meteor
} from "meteor/meteor"
import { check, Match } from "meteor/check"

const date = new Date()

Meteor.methods({
    "insert.promotion"(values) {
        check(values, {
            code: String,
            limit: Number,
            value: {
                type: String,
                value: Number,
                maxValue: Match.Optional(Number),
            },
            target: String,
            typeOfPromotion: String,
            startDate: Date,
            isoCode: String,
            cities: String,
            taskPlace: Match.Optional({
                city: Array,
                district: Array,
            }),
            description: Match.Optional(String),
            endDate: Match.Optional(Date),
            serviceId: Match.Optional(String),
            userIds: Match.Optional(Array),
            isFirstBooking: Match.Optional(Boolean),
            taskStartDate: Match.Optional(Date),
            taskEndDate: Match.Optional(Date),
            locked: Match.Optional(Boolean),
            promotionBy: Match.Optional(String),
            isTestingGame: Match.Optional(Boolean),
            minOrderValue: Match.Optional(Number),
            createdAt: Match.Optional(Date),
        });
        const isCode = Promotion.findOne({ code: values.code });
        if (isCode) {
            throw new Meteor.Error("Code already exists");
        }
        Promotion.insert({
            ...values,
            createdAt: new Date(),
        });
    },
    'remove.promotion'(id) {
        Promotion.remove(id)
    }
});