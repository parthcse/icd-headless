/**
 * "Happy Clients / Websites / Satisfaction / Years of Service" stats strip.
 *
 * THE single source of these numbers for the whole site — service pages render
 * them via ServicesMilestoneSection, and the special AI pages map them into
 * their own <Counters/> strip. Change a value here and it updates everywhere.
 */
const milestoneSection = {
	items: [
		{ icon: "clients", value: "250+", lines: ["Happy", "Clients"] },
		{ icon: "websites", value: "500+", lines: ["Successfully Optimized", "Websites"] },
		{ icon: "satisfaction", value: "100%", lines: ["Customer", "Satisfaction"] },
		{ icon: "service", value: "14Y", lines: ["Years of Unparalleled", "Service"] },
	],
};

export default milestoneSection;
