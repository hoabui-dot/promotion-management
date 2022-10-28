import SimpleSchema from 'simpl-schema';
import {
    Promotion
} from "../../imports/api/promotion"

Meteor.methods({
    'Promotion.createPromotion'({
        todoId,
        newText
    }) {
        new SimpleSchema({
            todoId: {
                type: String
            },
            newText: {
                type: String
            }
        }).validate({
            todoId,
            newText
        });

        const promotion = Promotion.findOne(todoId);

        if (!promotion.editableBy(this.userId)) {
            throw new Meteor.Error('todos.updateText.unauthorized',
                'Cannot edit todos in a private list that is not yours');
        }

        promotion.update(todoId, {
            $set: {
                text: newText
            }
        });
    }
});