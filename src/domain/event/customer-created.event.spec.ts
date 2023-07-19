import EventDispatcher from "./@shared/event-dispatcher";
import EnviaConsoleLog1Handler from "./customer/envia-console-log1.handler";
import EnviaConsoleLog2Handler from "./customer/envia-console-log2.handler";

describe("Customer created event tests", () => {
    it("should execute the Customer created event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler1 = new EnviaConsoleLog1Handler();
        const eventHandler2 = new EnviaConsoleLog2Handler();

        eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
        eventDispatcher.register("CustomerCreatedEvent", eventHandler1);

        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"].length).toBe(2);

        //TODO notify
    });
});