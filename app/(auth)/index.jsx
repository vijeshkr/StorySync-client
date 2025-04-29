import { ActivityIndicator, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'expo-image'
import styles from '../../styles/login.styles.js'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '../../constants/colors.js'
import { Link, router } from 'expo-router'

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        console.log('handle login');
        router.push('/(tabs)')
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styles.container}>
                {/* Illustration */}
                <View style={styles.topIllustration}>
                    <Image
                        source={require("../../assets/images/login.png")}
                        contentFit="contain"
                        style={styles.illustrationImage}
                        transition={1000}
                    />
                </View>

                <View style={styles.card}>
                    <View style={styles.formContainer}>
                        {/* Email Input */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Email</Text>
                            <View style={styles.inputContainer}>
                                <Ionicons
                                    name='mail-outline'
                                    size={20}
                                    color={COLORS.primary}
                                    style={styles.inputIcon}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your email"
                                    placeholderTextColor={COLORS.placeholder}
                                    autoCapitalize="none"
                                    keyboardType='email-address'
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>
                        </View>
                        {/* Password Input */}
                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Password</Text>
                            <View style={styles.inputContainer}>
                                {/* Left icon */}
                                <Ionicons
                                    name='lock-closed-outline'
                                    size={20}
                                    color={COLORS.primary}
                                    style={styles.inputIcon}
                                />
                                {/* Password */}
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your password"
                                    placeholderTextColor={COLORS.placeholder}
                                    value={password}
                                    onChangeText={setPassword}
                                    secureTextEntry={!showPassword}
                                />
                                {/* Eye icon */}
                                <TouchableOpacity
                                    style={styles.inputIcon}
                                    onPress={() => setShowPassword(!showPassword)}
                                >
                                    <Ionicons
                                        name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                                        size={20}
                                        color={COLORS.primary}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {/* Login button */}
                        <TouchableOpacity style={styles.button} onPress={handleLogin}
                            disabled={isLoading}>
                            {isLoading ? (
                                <ActivityIndicator color='#fff' />
                            ) : (
                                <Text style={styles.buttonText}>Login</Text>
                            )}
                        </TouchableOpacity>
                        {/* Footer */}
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>Don't have an account? </Text>
                            <Link href='/signup' asChild>
                                <TouchableOpacity onPress={() => console.log('Navigate to Sign Up')}>
                                    <Text style={styles.link}>Sign Up</Text>
                                </TouchableOpacity>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Login