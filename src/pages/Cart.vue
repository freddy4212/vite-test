<script setup>
import TopNavbar from '../components/TopNavbar.vue';
import Footer from '../components/Footer.vue';
import { useCart } from '/src/store/cart.js'
const store = useCart()
</script>

<template>
	<div class="wrapper">
		<TopNavbar />

		<div class="container">
			<main>
				<div class="py-5 text-center">
					<h1>Checkout form</h1>
					<p class="lead"></p>
				</div>

				<div class="row g-5">
					<div class="col-md-5 col-lg-4 order-md-last">
						<h4 class="d-flex justify-content-between align-items-center mb-3">
							<span class="text-primary">Your cart</span>
							<span class="badge bg-primary rounded-pill">{{ count }}</span>
						</h4>
						<ul class="list-group mb-3">
							<li class="list-group-item d-flex justify-content-between lh-sm" v-for="item in contents">
								<div>
									<h6 class="my-0">{{ item.title }}</h6>
									<small class="text-muted">{{ item.author }}</small>
								</div>
								<span class="text-muted"><span v-if="item.quantity > 1">{{ item.quantity }}x</span>
									{{ item.currency }}{{ item.price }}</span>
							</li>

							<li class="list-group-item d-flex justify-content-between bg-light">
								<div class="text-success">
									<h6 class="my-0">Promo code</h6>
									<small>{{ promo.code }}</small>
								</div>
								<span class="text-success">−{{ currency.symbol }}{{ promo.value }}</span>
							</li>
							<li class="list-group-item d-flex justify-content-between">
								<span>Total ({{ currency.name }})</span>
								<strong>{{ currency.symbol }}{{ total }}</strong>
							</li>
						</ul>

						<form class="card p-2">
							<div class="input-group">
								<input type="text" class="form-control" placeholder="Promo code">
								<button type="submit" class="btn btn-secondary">Redeem</button>
							</div>
						</form>
					</div>
					<div class="col-md-7 col-lg-8">
						<h4 class="mb-3">Billing address</h4>
						<form class="needs-validation" novalidate="">
							<div class="row g-3">
								<div class="col-sm-6">
									<label for="firstName" class="form-label">First name</label>
									<input type="text" class="form-control" id="firstName" placeholder="" value=""
										required="">
									<div class="invalid-feedback">
										Valid first name is required.
									</div>
								</div>

								<div class="col-sm-6">
									<label for="lastName" class="form-label">Last name</label>
									<input type="text" class="form-control" id="lastName" placeholder="" value=""
										required="">
									<div class="invalid-feedback">
										Valid last name is required.
									</div>
								</div>

								<div class="col-12">
									<label for="username" class="form-label">Username</label>
									<div class="input-group has-validation">
										<span class="input-group-text">@</span>
										<input type="text" class="form-control" id="username" placeholder="Username"
											required="">
										<div class="invalid-feedback">
											Your username is required.
										</div>
									</div>
								</div>

								<div class="col-12">
									<label for="email" class="form-label">Email <span
											class="text-muted">(Optional)</span></label>
									<input type="email" class="form-control" id="email" placeholder="you@example.com">
									<div class="invalid-feedback">
										Please enter a valid email address for shipping updates.
									</div>
								</div>

								<div class="col-12">
									<label for="address" class="form-label">Address</label>
									<input type="text" class="form-control" id="address" placeholder="1234 Main St"
										required="">
									<div class="invalid-feedback">
										Please enter your shipping address.
									</div>
								</div>

								<div class="col-12">
									<label for="address2" class="form-label">Address 2 <span
											class="text-muted">(Optional)</span></label>
									<input type="text" class="form-control" id="address2"
										placeholder="Apartment or suite">
								</div>
							</div>

							<hr class="my-4">

							<div class="form-check">
								<input type="checkbox" class="form-check-input" id="same-address">
								<label class="form-check-label" for="same-address">Shipping address is the same as my
									billing address</label>
							</div>

							<hr class="my-4">

							<h4 class="mb-3">Payment</h4>

							<div class="row gy-3">
								<div class="col-md-6">
									<label for="cc-name" class="form-label">Name on card</label>
									<input type="text" class="form-control" id="cc-name" placeholder="" required="">
									<small class="text-muted">Full name as displayed on card</small>
									<div class="invalid-feedback">
										Name on card is required
									</div>
								</div>

								<div class="col-md-6">
									<label for="cc-number" class="form-label">Credit card number</label>
									<input type="text" class="form-control" id="cc-number" placeholder="" required="">
									<div class="invalid-feedback">
										Credit card number is required
									</div>
								</div>

								<div class="col-md-3">
									<label for="cc-expiration" class="form-label">Expiration</label>
									<input type="text" class="form-control" id="cc-expiration" placeholder=""
										required="">
									<div class="invalid-feedback">
										Expiration date required
									</div>
								</div>

								<div class="col-md-3">
									<label for="cc-cvv" class="form-label">CVV</label>
									<input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
									<div class="invalid-feedback">
										Security code required
									</div>
								</div>
							</div>

							<hr class="my-4">

							<button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
						</form>
					</div>
				</div>
			</main>

		</div>

		<Footer />


		<div class="parallax__layer parallax__layer--3">
			<div id="stars" class="top-stars">&nbsp;</div>
		</div>

		<div class="parallax__layer parallax__layer--2"></div>

		<div class="parallax__layer parallax__layer--2">
			<div id="clouds" class="top-clouds">&nbsp;</div>
		</div>

		<div class="parallax__layer parallax__layer--2" style="z-index: 1000"></div>

		<div class="parallax__layer parallax__layer--1"></div>


	</div>
</template>

<style scoped>
.container {
	max-width: 960px;
	background: #111222;
	position: sticky;
	color: #ccc;
	z-index: 2000;
	padding-bottom: 50px;
}

h4,
h4 .text-primary {
	color: #e6ee9c !important;
}

.form-control {
	font-size: 1rem;
	background-color: rgba(0, 0, 0, .2);
	color: #ccc;
	border: 1px solid #656;
}

.input-group-text {
	background-color: rgba(0, 0, 0, .5);
	color: #ccc;
	border-color: #656;
}

.list-group-item {
	background-color: #eee;
}
</style>

<script>
import { mapState, mapActions } from 'pinia'

export default {
	components: {
		TopNavbar,
		Footer
	},

	mounted() {
		//console.log('mounted', this.contents)
	},

	computed: {
		...mapState(useCart, {
			contents: 'getContents',
			count: 'count',
			cartTotal: 'total'
		}),

		total() {
			return Math.max(this.cartTotal - this.promo.value, 0).toFixed(2);
		}
	},

	data() {
		return {
			currency: {
				name: 'USD',
				symbol: '$'
			},

			promo: {
				code: 'EXAMPLECODE',
				value: 5
			}
		};
	},
};
</script>