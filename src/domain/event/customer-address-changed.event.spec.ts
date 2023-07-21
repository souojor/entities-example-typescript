import Address from "../entity/address";
import Customer from "../entity/customer";
import EventDispatcher from "./@shared/event-dispatcher";
import EnviaConsoleLogHandler from "./customer/envia-console-log.handler";


describe("Customer events tests", () => {
    it("should execute the Customer created event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new EnviaConsoleLogHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");

        eventDispatcher.register("CustomerAddressChangedEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"]).toBeDefined();
        expect(eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"].length).toBe(1);

        const customer = new Customer("123", "Customer 123", eventDispatcher);
        const address = new Address("Street 123", 123, 'zip 123', 'City 123');
        customer.changeAddress(address);

        expect(spyEventHandler).toHaveBeenCalled();
    });
});