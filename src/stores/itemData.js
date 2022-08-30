import { defineStore } from "pinia";

export const useStore = defineStore({
	id: "data",
	state: () => ({
		items: [],
		baselineValues: {
			"SSD drive": 34994,
			"Secured magnetic tape cassette": 63264,
			Diary: 25334,
			"Slim diary": 31008,
			"SAS drive": 40128,
		},
	}),
	getters: {},
	actions: {
		async ammoData(){
			await fetch('https://api.tarkov.dev/graphql', {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json',
				  'Accept': 'application/json',
				},
				body: JSON.stringify({query: `{
					ammo {
						item{
						  shortName
						}
						caliber
						penetrationPower
						penetrationChance
						armorDamage
						damage
					  }
			  }`})
			  })
				.then(r => r.json())
				.then(data => console.log('data returned:', data));
		},
		async getItemData() {
			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
            items(name: "SSD") {
                name
                sellFor{
                  price
                  source
                }
                link
                iconLink
                changeLast48hPercent
            }
        }`,
				}),
			})
				.then((r) => r.json())
				.then((data) => {
					let blob = {
						name: data.data.items[0].name,
						iconLink: data.data.items[0].iconLink,
						sellFor: data.data.items[0].sellFor,
						base: 34994,
					};
					if (this.items.length === 0) {
						this.items.push(blob);
					}
					console.log(this.items);
				});

			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
                items(name: "SMT") {
                    name
                    sellFor{
                      price
                      source
                    }
                    link
                    iconLink
                    changeLast48hPercent
                }
            }`,
				}),
			})
				.then((r) => r.json())
				.then((data) => {
					let blob = {
						name: data.data.items[0].name,
						iconLink: data.data.items[0].iconLink,
						sellFor: data.data.items[0].sellFor,
						base: 63264,
					};
					this.items.push(blob);
					console.log(this.items);
				});
			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
                    items(name: "Diary") {
                        name
                        sellFor{
                          price
                          source
                        }
                        link
                        iconLink
                        changeLast48hPercent
                    }
                }`,
				}),
			})
				.then((r) => r.json())
				.then((data) => {
					let blob = {
						name: data.data.items[0].name,
						iconLink: data.data.items[0].iconLink,
						sellFor: data.data.items[0].sellFor,
						base: 25334,
					};
					this.items.push(blob);
					console.log(this.items);
				});
			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
                    items(name: "sdiary") {
                        name
                        sellFor{
                          price
                          source
                        }
                        link
                        iconLink
                        changeLast48hPercent
                    }
                }`,
				}),
			})
				.then((r) => r.json())
				.then((data) => {
					let blob = {
						name: data.data.items[0].name,
						iconLink: data.data.items[0].iconLink,
						sellFor: data.data.items[0].sellFor,
						base: 31008,
					};
					this.items.push(blob);
					console.log(this.items);
				});
			await fetch("https://api.tarkov.dev/graphql", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query: `{
                items(name: "SAS") {
                    name
                    sellFor{
                      price
                      source
                    }
                    link
                    iconLink
                    changeLast48hPercent
                }
            }`,
				}),
			})
				.then((r) => r.json())
				.then((data) => {
					let blob = {
						name: data.data.items[0].name,
						iconLink: data.data.items[0].iconLink,
						sellFor: data.data.items[0].sellFor,
						base: 40128,
					};

					this.items.push(blob);

					console.log(this.items);
				});
		},
	},
});
